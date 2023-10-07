import {useUser} from "@auth0/nextjs-auth0/client";
import styles from "@/app/page.module.css";
import {SignupButton} from "@/modules/login/components/signup-button";
import {LoginButton} from "@/modules/login/components/login-button";
import {LogoutButton} from "@/modules/login/components/logout-button";
import {useGetHelloQuery} from "@/modules/main/api";

export function MainPageContent() {
    const { user } = useUser();
    const hello = useGetHelloQuery()
    console.log(hello)
    return (
        <main className={styles.main}>
            <div className="nav-bar__buttons">
                {!user && (
                    <>
                        <SignupButton />
                        <LoginButton />
                    </>
                )}
                {user && (
                    <>
                        <LogoutButton />
                    </>
                )}
            </div>
        </main>
    )
}