import { Router } from 'express';
const router = Router();

// 댓글 작성
router.post('/api/posts/:postId/comments', async (req, res) => {
 
});

// 댓글 목록 조회
router.get('/api/posts/comments', async (req, res) => {

});

// 댓글 수정
router.patch('/api/posts/comments', async (req, res) => {
    
});

// 댓글 삭제
router.delete('/api/posts/comments', async (req, res) => {
    
});

export default router;
