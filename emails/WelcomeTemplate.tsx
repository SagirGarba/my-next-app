import React from "react";
import {
  Html,
  Preview,
  Body,
  Text,
  Link,
  Tailwind,
  Container,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Aboard!</Preview>
      <Tailwind>
        <Body>
          <Container className="bg-white">
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://sagir-tech.netlify.app/"> Sagir Portfolio</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
