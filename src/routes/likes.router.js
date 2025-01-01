import { Router } from 'express';
const router = Router();

// 게시물 좋아요
router.post('/api/posts/:postId/likes', async (req, res) => {
 
});

// 게시물 좋아요 취소
router.delete('/api/posts/:postId/unlikes', async (req, res) => {
    
});

export default router;
