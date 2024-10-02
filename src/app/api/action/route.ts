import { NextRequest, NextResponse } from "next/server";
import { ActionGetResponse, ACTIONS_CORS_HEADERS } from "@solana/actions";

export async function GET(req: NextRequest) {
  let response = {
    type: "action",
    icon: `https://pbs.twimg.com/media/GVtOC-KXQAA1aN7?format=jpg&name=large`,
    media: `https://video.twimg.com/amplify_video/1815225283353673728/vid/avc1/1280x720/33jn7JEVyOGfRh21.mp4`,
    mediaType: "video",
    title: "Action A",
    description: "Action A",
    label: "Action A Label",
    links: {
      actions: [
        {
          label: "Blinks are blinking", // button text
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
