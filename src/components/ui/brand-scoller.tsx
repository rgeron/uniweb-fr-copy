"use client";

import { BsAmazon, BsGoogle, BsSpotify, BsYoutube } from "react-icons/bs";

export const BrandScroller = () => {
  return (
    <>
      <div className="group flex overflow-hidden py-4 [--gap:2.5rem] [gap:var(--gap))] flex-row max-w-full [--duration:15s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
              key={i}
            >
              <div className="flex items-center w-36 gap-4">
                <BsSpotify size={28} />
                <p className="text-xl font-semibold opacity-80">Spotify</p>
              </div>
              <div className="flex items-center w-36 gap-4">
                <BsYoutube size={28} />
                <p className="text-xl font-semibold opacity-80">YouTube</p>
              </div>
              <div className="flex items-center w-36 gap-4">
                <BsAmazon size={28} />
                <p className="text-xl font-semibold opacity-80">Amazon</p>
              </div>

              <div className="flex items-center w-36 gap-4">
                <BsGoogle size={28} />
                <p className="text-xl font-semibold opacity-80">Google</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export const BrandScrollerReverse = () => {
  return (
    <>
      <div className="group flex overflow-hidden py-4 [--gap:2.5rem] [gap:var(--gap))] flex-row max-w-full [--duration:15s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-reverse flex-row"
              key={i}
            >
              <div className="flex items-center w-36 gap-4">
                <BsSpotify size={28} />
                <p className="text-xl font-semibold opacity-80">Spotify</p>
              </div>
              <div className="flex items-center w-36 gap-4">
                <BsYoutube size={28} />
                <p className="text-xl font-semibold opacity-80">YouTube</p>
              </div>
              <div className="flex items-center w-36 gap-4">
                <BsAmazon size={28} />
                <p className="text-xl font-semibold opacity-80">Amazon</p>
              </div>

              <div className="flex items-center w-36 gap-4">
                <BsGoogle size={28} />
                <p className="text-xl font-semibold opacity-80">Google</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
