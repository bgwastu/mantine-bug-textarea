import { Container, Textarea } from "@mantine/core";

export default function HomePage() {
  return (
    <Container mt={20}>
      <Textarea
        name="background"
        label="Background"
        description="Concise background of the survey's context and the target audience"
        required
        autosize
        minRows={10}
      />
    </Container>
  );
}
