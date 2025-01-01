import { Router } from 'express';
const router = Router();

// 게시물 작성
router.post('/api/posts', async (req, res) => {
 
});

// 게시물 목록 조회
router.get('/api/posts', async (req, res) => {

});


// 게시물 상세 조회
router.get('/api/posts/:postId', (req, res) => {
 
});
  

// 게시물 수정
router.patch('/api/posts/:postId', (req, res) => {
    
});

// 게시물 삭제
router.delete('/api/posts/:postId', (req, res) => {
    
});

export default router;
