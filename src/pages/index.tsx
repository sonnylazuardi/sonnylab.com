import Head from 'next/head';
import tw from 'twin.macro';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
const Ball = dynamic(() => import('~components/Ball'), {
  ssr: false
});

const Home = () => {
  return (
    <div css={tw`bg-black min-h-screen text-white font-inter`}>
      <Head>
        <title>Sonny Lazuardi</title>
      </Head>
      <div
        css={tw`fixed top-0 left-0 right-0 bottom-0 z-0`}
        style={{
          background: `url('./images/darkbg.svg') center center`,
          backgroundSize: 'cover'
        }}
      ></div>
      <Ball />

      <div css={tw`fixed top-0 left-0 right-0 bottom-0 z-10 pointer-events-none`}>
        <div css={tw`text-center flex flex-col justify-center items-center h-screen`}>
          <div css={tw`pb-16`}>
            <div css={tw`text-base font-extrabold text-gray-300`}>HI THERE 👋 I'M</div>
            <div css={tw`md:text-8xl text-7xl font-black tracking-tighter`}>
              <div css={tw`md:-mb-4 -mb-2`}>Sonny</div>
              <div css={tw``}>Lazuardi</div>
            </div>
          </div>
        </div>
      </div>

      <main css={tw`absolute top-0 left-0 right-0 z-20 pointer-events-none`}>
        <div css={tw`container mx-auto`}>
          <div css={tw`h-screen relative`}>
            <div
              css={tw`absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 backdrop-filter backdrop-blur-lg h-64 rounded-t-3xl pointer-events-auto p-10 mx-4 md:mx-0 flex items-center`}
            >
              <div css={tw`flex flex-col md:flex-row max-w-lg mx-auto space-y-4 md:space-x-4 md:space-y-0`}>
                <div css={tw``}>
                  <div
                    css={tw`rounded-full overflow-hidden width[50px] height[50px] md:width[106px] md:height[106px] `}
                  >
                    <Image src="/images/pp.jpg" width={106} height={106} />
                  </div>
                </div>
                <div css={tw``}>
                  <div css={tw`text-sm md:text-base text-gray-300`}>
                    <p css={tw`mb-2`}>
                      I'm a <Bold>Design / UX Engineer</Bold>. I merge <Bold>technical skills</Bold> with{' '}
                      <Bold>design knowledge</Bold> to create <Bold>innovative products</Bold> that drive business.
                    </p>
                    <p>Currently lead UX Engineer based in Singapore.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div css={tw`bg-black min-h-screen pointer-events-auto`}>
          <div css={tw`container mx-auto pt-20`}>
            <div
              css={tw`flex flex-wrap max-w-lg justify-center space-x-4 mx-auto`}
              style={{
                background: `url('./images/highlight.svg') no-repeat`,
                backgroundSize: 'stretch'
              }}
            >
              <Link href="https://twitter.com/sonnylazuardi">
                <Chip>Twitter</Chip>
              </Link>
              <Chip>Github</Chip>
              <Chip>Figma</Chip>
              <Chip>LinkedIn</Chip>
              <Chip>Product Hunt</Chip>
              <Chip>Polywork</Chip>
              <Chip>Email</Chip>
            </div>
          </div>
        </div>
        <div css={tw``}></div>
      </main>

      <footer></footer>
    </div>
  );
};

const Bold = tw.span`font-bold text-white`;

const Chip = tw.div`px-6 py-2 bg-gray-800 font-semibold rounded-lg mb-4 hover:bg-gray-700 cursor-pointer`;

export default Home;
