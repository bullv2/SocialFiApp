export interface SocialChainPost {
  id: string;
  content: string;
  timestamp: Date;
  likes: number;
  comments: number;
  reposts: number;
  previousPostId: string | null;
  nextPostId: string | null;
}

export interface SocialChain {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  posts: SocialChainPost[];
} 