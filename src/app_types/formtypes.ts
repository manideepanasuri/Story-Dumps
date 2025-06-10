import  {z} from 'zod';

export const signupSchema = z.object({
  name: z.string().min(3,"Name should be atleast 3 characters"),
  email: z.string().email(),
  password: z.string().min(8,"Password should be at least 8 characters"),
  confirmPassword: z.string().min(8,"Password should be at least 8 characters"),
}).superRefine((val,ctx) => {
  if(val.password != val.confirmPassword){
    ctx.addIssue(
      {
        code:z.ZodIssueCode.custom,
        message:"Passwords do not match",
        path:["confirmPassword"]
      }
    )
  }
})

export const changePasswordSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8,"Password should be at least 8 characters"),
  confirmPassword: z.string().min(8,"Password should be at least 8 characters"),
}).superRefine((val,ctx) => {
  if(val.password != val.confirmPassword){
    ctx.addIssue(
      {
        code:z.ZodIssueCode.custom,
        message:"Passwords do not match",
        path:["confirmPassword"]
      }
    )
  }
})


export  const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8,"Password should be atleast 8 characters"),
})

export const generateVideoSchema = z.object({
  title: z.string().min(3,"Name should be atleast 3 characters"),
  text: z.string().min(10,"Text should be atleast 10 characters"),
})

