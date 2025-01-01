import { Router } from 'express';
const router = Router();

// 사용자 팔로우
router.post('/api/users/:userId/follow', async (req, res) => {
 
});

// 사용자 언팔로우
router.delete('/api/users/:userId/unfollow', async (req, res) => {
    
});

export default router;
