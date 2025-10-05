import {NextResponse} from 'next/server'
export function middleware(request){

const {pathname}=request.nextUrl;
const token=request.cookies.get("token");
// console.log(typeof(token.value));
 

if(!token && pathname.startsWith("/login")){
  return NextResponse.next();
}else if(token.value==="1234S@eed" && pathname.startsWith("/login")){
  return NextResponse.rewrite(new URL("/login/panel-admin",request.url));
}else if(token.value && pathname.startsWith("/login")){
  return NextResponse.rewrite(new URL("/login/panel-user",request.url));
}

}



export const config={
    matcher:['/login/:path*']
}