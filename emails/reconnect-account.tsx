import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ReconnectAccountProps {
  accountName?: string;
  reconnectLink?: string;
  imagePath?: string;
}

export const ReconnectAccount = ({
  accountName = 'Chase',
  reconnectLink = 'https://app.withcompound.com/wealth/accounts',
  imagePath = 'https://image.concierge.withcompound.com/lib/fe3511737164047c701775/m/1/ee508a8e-efe6-4f9f-b2e9-e7bbdbd7f171.png',
}: ReconnectAccountProps) => {
  const previewText = `Reconnect your ${accountName} account`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto w-[465px]">
            <Img
              src={imagePath}
              width="600"
              height="109"
              alt="Compound"
              className="my-0 mx-auto"
            />
            <Heading className="text-black text-[24px] font-normal px-[20px] my-[30px] mx-0">
              Keep your net worth up-to-date
            </Heading>
            <Text className="text-black text-[14px] leading-[24px] px-[20px]">
              We ran into some issues reaching {accountName}, and your net worth might be out of date. Reconnect them below and see your net worth update in real-time.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
                href={reconnectLink}
              >
                Reconnect
              </Button>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] mx-0 w-full" />
            <Text className="text-center text-[#666666] text-[12px] leading-[24px]">
              Your current net worth:{' '}
              <span className="text-black">$791,579.64 </span>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ReconnectAccount;