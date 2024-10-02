import { NextRequest, NextResponse } from "next/server";
import { ActionGetResponse, ACTIONS_CORS_HEADERS } from "@solana/actions";

export async function GET(req: NextRequest) {
  let response = {
    type: "action",
    icon: `https://preview.redd.it/plinko-v0-w04f863eh2lc1.jpeg?width=1080&crop=smart&auto=webp&s=fac57c67ec4ba493ddddad815e340753a0e5f625`,
    media: `https://video.twimg.com/amplify_video/1815225283353673728/vid/avc1/1280x720/33jn7JEVyOGfRh21.mp4`,
    mediaType: "video",
    title: "Play Plinko",
    description: "Play plinko using blinks",
    label: "Bet 0.5 SOL",
    links: {
      actions: [
        {
          label: "Bet 0.5 SOL", // button text
          href: "/api/action/", // api endpoint
        },
      ],
    },
  };

  return NextResponse.json(response, {
    headers: ACTIONS_CORS_HEADERS,
  });
}

// ensures cors
export const OPTIONS = GET;
