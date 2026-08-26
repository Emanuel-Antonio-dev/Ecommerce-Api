import passport from "passport";
import {Strategy as GoogleStrategy, Profile} from "passport-google-oauth20";
import "dotenv/config"
import { JwtOperations } from "../../../../Common/Utils/AuthenticationsProcols/JwtOperations/operations";
import { prismaService } from "../../../../lib/prisma.service";

passport.use(new GoogleStrategy({
    clientID: String(process.env.GOOGLE_CLIENT_ID),
    clientSecret: String(process.env.GOOGLE_CLIENT_SECRET_KEY),
    callbackURL: String(process.env.GOOGLE_CLIENT_CALLBACK_URL),
}, async (accessToken, refreshToken, profile: Profile, done: any)=>{
    try
    {
        const email = profile.emails?.[0].value
        if(!email)
        {
            return done(new Error("Email não disponivel no perfil do google"))
        }
        let existingUser = await prismaService.accounts.findUnique({where:{email:email}, include:{user_details:true}})
        if (!existingUser)
        {
            const tempToken = JwtOperations.GenerateTempToken({
                first_name: profile.name?.givenName,
                last_name: profile.name?.familyName,
                email: profile.emails,
                user_type: "client",
                providerId: profile.id,
                provider: profile.provider
            })
            return done(null, {token: tempToken, newUser: true})
        }
        const accessToken = JwtOperations.GenerateAccessToken({sub:existingUser.user_details?.id_user!, user_type: existingUser.user_details?.user_type!})
        const refreshToken = JwtOperations.GenerateTempToken({sub:existingUser.user_details?.id_user, user_type: existingUser.user_details?.user_type!})

        return done(null, {accessToken, refreshToken, user: existingUser})
    } catch (error: any)
    {
        done(error as Error)
    }
}))