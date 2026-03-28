import React from "react";
import { Composition, registerRoot } from "remotion";
import { HachikoKidsVideo, videoSchema } from "./HachikoKidsVideo";
import { HachikoKidsVideoClinica, videoClinicaSchema } from "./HachikoKidsVideoClinica";
import { FPS, VIDEO_W, VIDEO_H } from "./constants";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HachikoKidsDemo"
        component={HachikoKidsVideo}
        schema={videoSchema}
        defaultProps={{
          contactEmail: "josemaria.munoz95@gmail.com",
          pilotCount: 30,
          apkUrl: "https://hachiko.apps/download/hachiko-kids.apk",
        }}
        durationInFrames={3480}
        fps={FPS}
        width={VIDEO_W}
        height={VIDEO_H}
      />
      <Composition
        id="HachikoKidsDemoClinica"
        component={HachikoKidsVideoClinica}
        schema={videoClinicaSchema}
        defaultProps={{
          contactEmail: "josemaria.munoz95@gmail.com",
          formUrl: "https://hachiko.apps/clinica/colaborar",
        }}
        durationInFrames={3480}
        fps={FPS}
        width={VIDEO_W}
        height={VIDEO_H}
      />
    </>
  );
};

registerRoot(RemotionRoot);
