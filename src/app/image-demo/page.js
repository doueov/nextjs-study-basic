import Image from 'next/image'
// 절대 경로로 지정하여 루트 폴더의 public에서 이미지 불러오기
import myLocalPic from '/public/logo.png'

export default function ImageDemoPage() {
    return (
        <div>
            <Image
                src={myLocalPic}
                alt="Description for Picture..."
            />
            {/* import 하지 않고 직접 src에 경로 제공할 경우 width, height 정보를 제공해야 함 */}
            <Image
                src="/logo.png"
                width={756}
                height={154}
                alt="Description for Picture..."
            />
            {/* 부모 요소에 position 부여 및 사이즈 설정 */}
            <div style={{ position: "relative", width: "1000px", height: "300px", background: "cyan" }}>
                {/* fill 속성 제공 및 부모 크기에 적절히 맞추도록 object-fit 속성 적용 */}
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png"
                    alt="Description for Picture..."
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div>
        </div>
    )
}