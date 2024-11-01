import { jwtVerify } from "jose"
import { NextResponse } from "next/server"

export async function middleware(request){
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTczMDUzMDkxMn0.j6yd3Pb6-nErxhnU0wtYBgANIMLknLddGiLVsW-1W8Q"
  // await request.headers.get("Authorization")?.split(" ")[1]
  if(!token){
    return NextResponse.json({message: "トークンがありません"})
  }

  try{
    const secretKey = new TextEncoder().encode("next-market-app-book")
    const decodedJwt = await jwtVerify(token, secretKey)
    return NextResponse.next()
  }catch{
    return NextResponse.json({message: "トークンが正しくないので、ログインしてください"})
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"],
}