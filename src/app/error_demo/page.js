"use client"

export default function ErrorDemoPage() {
    const random = Math.random() < 0.5
    console.log(random)
    // 렌더링 도중에 발생한 에러가 발생하면 error.js에서 정의한 컴포넌트 대체 렌더링
    if (random) throw new Error('Error Message Here')

    return <div>
        <h1>Error Demo Page</h1>
        <button onClick={() => {
            // 렌더링 이후 발생한 에러에 대해서는 try - catch로 처리해야 함
            throw new Error('Another Error Message')
        }}>Throw error</button>
    </div>
}