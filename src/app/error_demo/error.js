// 에러 컴포넌트는 반드시 클라이언트 컴포넌트로 정의해야 함
'use client'

import { useEffect } from 'react'

// props로 전달받는 값은 에러 객체와 reset 함수
// (reset 함수를 호출하면 에러가 발생한 영역을 re-render함)
export default function Error({ error, reset }) {
    useEffect(() => {
        // 에러 로그를 기록하는 API로 요청 보낸다면, 해당 로직이 들어갈 곳
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>에러 발생 ({error.message})</h2>
            <button onClick={
                // 컴포넌트 렌더링을 다시 시도
                () => reset()
            }>컴포넌트 re-render</button>
        </div>
    )
}