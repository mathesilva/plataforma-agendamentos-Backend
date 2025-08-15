import { Router } from 'express';
import { AuthControllers } from './../controllers/AuthControllers';
import { auth, AuthRequest } from '../middlewares/auth';
import { User } from '../models/User';

const router = Router();
//const authController = new AuthControllers();

router.post('/register', (req, res) => AuthControllers.register(req, res));
router.post('/login', (req, res) => AuthControllers.login(req, res));


router.get('/profile', auth, async (req: AuthRequest, res) => {
    try {
        console.log("ID recebido no controller:", req.userId);

        // Verificação adicional para garantir que req.userId não seja undefined
        if (!req.userId) {
            return res.status(401).json({ error: "ID de usuário não encontrado no token." });
        }

        const user = await User.findById(req.userId).select("-password");

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        return res.json({ user });
    } catch (error) {
        console.error("Erro ao buscar perfil:", error);
        return res.status(500).json({ error: "Erro ao buscar perfil." });
    }
});

export default router;

