const nextConfig = {
    images: {
        // 모든 도메인을 통해 접근하는 이미지 표시 허용
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};

export default nextConfig;