interface UserInfo {
    name: string;
    email:string;
}

interface UserState{
    userInfo: UserInfo | null 
}


interface ThemeState {
    themeMode: boolean
}
