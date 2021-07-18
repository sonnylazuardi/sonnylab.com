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

      <main css={tw`relative z-20 pointer-events-none`}>
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
          <div css={tw`container mx-auto pt-20 relative`}>
            <div css={tw`absolute top[120px] left-0 right-0 z-0`}>
              <div
                css={tw`w-full max-w-sm h-20 mx-auto filter blur-3xl`}
                style={{
                  animation: `10s ease-in-out 0s infinite normal both running pulse`,
                  background: `linear-gradient(91.83deg, rgb(208, 60, 74) 2.26%, rgb(172, 74, 218) 95.81%)`
                }}
              ></div>
            </div>
            <div css={tw`flex flex-wrap max-w-lg justify-center space-x-4 mx-auto py-8 relative z-10`}>
              <Link href="https://twitter.com/sonnylazuardi">
                <Chip>Twitter</Chip>
              </Link>
              <Link href="https://github.com/sonnylazuardi">
                <Chip>Github</Chip>
              </Link>
              <Link href="https://figma.com/@sonny">
                <Chip>Figma</Chip>
              </Link>
              <Link href="https://linkedin.com/in/sonnylazuardi/">
                <Chip>LinkedIn</Chip>
              </Link>
              <Link href="https://producthunt.com/@sonnylazuardi">
                <Chip>Product Hunt</Chip>
              </Link>
              <Link href="https://instagram.com/sonnylazuardi">
                <Chip>Instagram</Chip>
              </Link>
              <Link href="mailto:sonnylazuardi@gmail.com">
                <Chip>Email</Chip>
              </Link>
            </div>

            <div css={tw`text-center mt-20 mb-12 text-3xl md:text-5xl font-black`}>Featured Works</div>

            <div css={tw`grid px-4 md:grid-cols-2 md:px-0 gap-6 pb-20`}>
              <Link href="https://flipbook.sonnylab.com/">
                <Card>
                  <CTitle>Flipbook</CTitle>
                  <CDesc>
                    Animate your figma design frame by frame with live-preview, customizable speed, and GIF file export
                  </CDesc>
                  <div css={tw`flex mt-4`}>
                    <CTag>Figma Plugin</CTag>
                  </div>
                </Card>
              </Link>
              <Link href="https://colorcopypaste.app/">
                <Card>
                  <CTitle>Color Copy Paste</CTitle>
                  <CDesc>Copy and paste colour directly from real-world camera to Figma, Sketch, or Browser</CDesc>
                  <div css={tw`flex mt-4`}>
                    <CTag>Figma Plugin</CTag>
                  </div>
                </Card>
              </Link>
              <Link href="https://globe-3d.vercel.app/">
                <Card>
                  <CTitle>Globe 3D</CTitle>
                  <CDesc>Create an Interactive 3D globe image based on your flat world map design</CDesc>
                  <div css={tw`flex mt-4`}>
                    <CTag>Figma Plugin</CTag>
                  </div>
                </Card>
              </Link>
              <Link href="https://works.sonnylab.com/">
                <Card>
                  <div css={tw`flex justify-center items-center h-full`}>
                    <CTitle>More Works →</CTitle>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </div>
        <div css={tw``}></div>
      </main>

      <footer css={tw`h-20 relative z-20 flex justify-center items-center bg-gray-800 text-gray-300`}>
        Designed with ❤️ in Singapore
      </footer>
      <style jsx>
        {`
          @keyframes pulse {
            0% {
              transform: rotate(0deg);
              filter: blur(8px);
              border-radius: 5px;
            }

            33% {
              transform: rotate(-0.5deg) translate(1px, -1px) scale(1.01);
              filter: blur(10px);
              border-radius: 3px;
            }
            67% {
              transform: rotate(1deg) translate(-1px, -1px) scale(0.99);
              filter: blur(14px);
              border-radius: 7px;
            }
            100% {
              transform: rotate(0deg);
              filter: blur(8px);
              border-radius: 5px;
            }
          }
        `}
      </style>
    </div>
  );
};

const Bold = tw.span`font-bold text-white`;
const Card = tw.div`min-height[150px] bg-gray-900 rounded-lg p-6 cursor-pointer`;
const CTitle = tw.div`font-semibold mb-1`;
const CDesc = tw.div`text-gray-300 text-sm md:text-base`;
const CTag = tw.div`bg-black px-3 py-1 text-xs font-semibold rounded-md text-gray-300`;
const Chip = tw.div`px-6 py-2 bg-black font-semibold rounded-lg mb-4 hover:text-gray-400 cursor-pointer`;

export default Home;
