import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-600 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-8">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Tucked away in the heart of Tunisia, between mountains and beaches,
            Cabin Escape Resort is your perfect retreat. It&apos;s not just
            about the luxurious cabins, but the experience of reconnecting with
            nature. Here, you can enjoy simple pleasures, whether it&apos;s
            exploring the mountains, relaxing by the beach, or creating lasting
            memories with your loved ones. Your paradise, where serenity meets
            adventure.
          </p>
          <p>
            Our luxury cabins provide a cozy base, but the real freedom and
            peace you&apos;ll find in the surrounding mountains. Wander through
            lush forests, breathe in the fresh air, and watch the stars twinkle
            above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-600 font-medium">
          Managed by our family since 2020
        </h1>

        <div className="space-y-8">
          <p>
            Since 2020, Cabin Escape Resort has been a cherished family-run
            retreat. Started by our family, this haven has been nurtured with
            love and care, standing as a testament to our dedication to creating
            a warm, welcoming environment.
          </p>
          <p>
            Over these five years, we&apos;ve maintained the essence of Cabin
            Escape Resort, blending the timeless beauty of the mountains and
            beaches with the personal touch only a family business can offer.
            Here, you&apos;re not just a guest; you&apos;re part of our extended
            family. So join us at Cabin Escape Resort soon, where tradition
            meets tranquility, and every visit feels like coming home.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-700 px-8 py-5 text-primary-950 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
