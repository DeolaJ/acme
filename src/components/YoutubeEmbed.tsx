"use client";

import YouTube from "react-youtube";

import { YoutubeEmbed } from "@/types";

function YoutubeEmbed({ youtubeInfo }: { youtubeInfo: YoutubeEmbed }) {
    const { videoId, start } = youtubeInfo;

    if (!videoId) return null;

    return (
        <div className="aspect-video">
            <YouTube
                videoId={videoId}
                opts={{
                    height: 270,
                    width: 480,
                    playerVars: {
                        start,
                    },
                }}
                className="flex w-full"
            />
        </div>
    );
}

export default YoutubeEmbed;
