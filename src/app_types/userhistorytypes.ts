export interface FullResult {
  count: number
  total_pages: number
  current_page: number
  next: null|string
  previous: null|string
  results: Task[]
}
export interface Task {
  id: number
  useduuid: string
  percentage: string
  text: string
  title: string
  status: string
  video_url: string
  audio_url: string
  ass_url: string
  thumbnail_url: string
  created_at: string
  updated_at: string
  user: number
}

export const jsonobj:FullResult={
  "count": 3,
  "total_pages": 1,
  "current_page": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 8,
      "useduuid": "296883b4-0239-4bc7-9b18-f45be2350343",
      "percentage": "100",
      "text": "hello i am , Manideep and I am going to be the greatest of all",
      "title": "Hel\nlooooooooooooooooooooooooo",
      "status": "SUCCESS",
      "video_url": "http://localhost:9000/uservideos/videos/296883b4-0239-4bc7-9b18-f45be2350343.mp4",
      "audio_url": "http://localhost:9000/uservideos/audio/296883b4-0239-4bc7-9b18-f45be2350343.wav",
      "ass_url": "http://localhost:9000/uservideos/ass/296883b4-0239-4bc7-9b18-f45be2350343.ass",
      "thumbnail_url": "http://localhost:9000/uservideos/thumbnail/296883b4-0239-4bc7-9b18-f45be2350343.jpg",
      "created_at": "2025-06-07T10:35:18.322280Z",
      "updated_at": "2025-06-07T10:35:47.583487Z",
      "user": 1
    },
    {
      "id": 7,
      "useduuid": "05818744-4411-4756-97ff-3e18d395df2b",
      "percentage": "100",
      "text": "For website design inspiration, consider exploring sites like Awwwards and SiteInspire, Behance, and Dribbble. These platforms curate and showcase a wide range of website designs, allowing you to discover innovative ideas and current trends. Additionally, specialized sites like Landbook and OnePageLove, which focus on landing pages and single-page websites respectively, can be valuable resources for specific design needs. ",
      "title": "Temp1",
      "status": "SUCCESS",
      "video_url": "http://localhost:9000/uservideos/videos/05818744-4411-4756-97ff-3e18d395df2b.mp4",
      "audio_url": "http://localhost:9000/uservideos/audio/05818744-4411-4756-97ff-3e18d395df2b.wav",
      "ass_url": "http://localhost:9000/uservideos/ass/05818744-4411-4756-97ff-3e18d395df2b.ass",
      "thumbnail_url": "http://localhost:9000/uservideos/thumbnail/05818744-4411-4756-97ff-3e18d395df2b.jpg",
      "created_at": "2025-06-07T08:56:54.217246Z",
      "updated_at": "2025-06-07T08:58:39.331572Z",
      "user": 1
    },
    {
      "id": 6,
      "useduuid": "be9ee98c-b8cb-48b7-ab0b-060727755428",
      "percentage": "100",
      "text": "Each message that is written to the logger is a Log Record. Each log record also has a log level indicating the severity of that specific message. A log record can also contain useful metadata that describes the event that is being logged. This can include details such as a stack trace or an error code.",
      "title": "Video 1",
      "status": "SUCCESS",
      "video_url": "http://localhost:9000/uservideos/videos/be9ee98c-b8cb-48b7-ab0b-060727755428.mp4",
      "audio_url": "http://localhost:9000/uservideos/audio/be9ee98c-b8cb-48b7-ab0b-060727755428.wav",
      "ass_url": "http://localhost:9000/uservideos/ass/be9ee98c-b8cb-48b7-ab0b-060727755428.ass",
      "thumbnail_url": "http://localhost:9000/uservideos/thumbnail/be9ee98c-b8cb-48b7-ab0b-060727755428.jpg",
      "created_at": "2025-06-07T08:26:47.366801Z",
      "updated_at": "2025-06-07T08:28:53.420502Z",
      "user": 1
    }
  ]
}