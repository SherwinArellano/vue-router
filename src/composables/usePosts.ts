import { useQuery } from '@tanstack/vue-query'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export function usePosts() {
  return useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!response.ok) throw new Error('Network response was not ok')
      return response.json()
    },
  })
}
