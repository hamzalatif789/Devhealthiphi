"use client"

export function CardElement() {
  return (
    <div className="p-4 border rounded-md bg-gray-50">
      <div className="flex flex-col space-y-1.5">
        <div className="h-8 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="flex space-x-2">
          <div className="h-8 w-16 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-8 w-16 bg-gray-200 rounded-md animate-pulse"></div>
        </div>
      </div>
      <p className="text-xs text-center mt-2 text-muted-foreground">
        Secure card input would appear here in production
      </p>
    </div>
  )
}
