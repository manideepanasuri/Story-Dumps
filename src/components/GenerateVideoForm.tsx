"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {toast} from "sonner"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {generateVideoSchema} from "@/app_types/formtypes.ts";
import {Textarea} from "@/components/ui/textarea.tsx";
import axios from "axios";
import {userAuthStore} from "@/store/userAuthStore.tsx";


export function GenerateVideoForm() {
  const form = useForm<z.infer<typeof generateVideoSchema>>({
    resolver: zodResolver(generateVideoSchema),
    defaultValues: {
      title: "",
      text: "",
    },
  })
  const {tokens}=userAuthStore()

  async function genVideo(form_data: z.infer<typeof generateVideoSchema>) {
    try {
      const url = import.meta.env.VITE_BACKEND_HOST + "api/makevideo/upload-audio/"
      const config = {
        url: url,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${tokens.access}`,
        },
        data: form_data
      }
      const response = await axios(config)
      console.log(response)
      return response.data?.message ?? "Please wait few Minutes"
    } catch (error) {
      console.log(error)
      throw new Error("Failed to generate video")
    }
  }


function onSubmit(data: z.infer<typeof generateVideoSchema>) {
  const tost_id=toast.loading("Please wait")
  genVideo(data).then((result) => {toast.success(result,{id:tost_id})}).catch(error =>{toast.error(error.message,{id:tost_id})})
}

return (
  <div className="px-2  flex items-center justify-center" >
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}
            className=" flex-1 space-y-6 max-w-lg p-6 bg-foreground/10 backdrop-blur-md border border-foreground/10 shadow-lg rounded-md">
        <FormField
          control={form.control}
          name="title"
          render={({field}) => (
            <FormItem>
              <FormLabel className="text-4xl font-bold">Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormDescription>
                This is not used in Video
              </FormDescription>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({field}) => (
            <FormItem>
              <FormLabel className="text-4xl font-bold">Text</FormLabel>
              <FormControl>
                <Textarea className="min-h-60 max-h-90" placeholder="Text" {...field} />
              </FormControl>
              <FormDescription>
                This is used in Video
              </FormDescription>
              <FormMessage/>
            </FormItem>
          )}
        />
        <div className="flex items-center justify-center">
          <Button type="submit" className="mx-auto w-50">Submit</Button>
        </div>
      </form>
    </Form>
  </div>
)
}
