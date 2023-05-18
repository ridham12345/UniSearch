import universityRoute from './universityRoute.js';
import majorRoute from './majorRoute.js';
import courseRoute from './courseRoute.js';
import facultyRoute from './facultyRoute.js';
import commentRoute from './commentRoute.js';
import userRoutes from './users.js';
import authRoutes from './auth.js';
import passwordResetRoutes from './passwordReset.js';

export default (app) => {
    app.use('/university', universityRoute);
    app.use('/major', majorRoute);
    app.use('/course', courseRoute);
    app.use('/faculty', facultyRoute);
    app.use('/comment', commentRoute);
    app.use("/api/users",userRoutes);
    app.use("/api/auth",authRoutes);
    app.use("/api/password-reset",passwordResetRoutes);
}