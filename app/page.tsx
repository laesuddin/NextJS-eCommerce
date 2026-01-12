import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <Container className="p-10 bg-shop_light_pink">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam
        quibusdam quaerat magni consequatur maxime excepturi commodi ipsa, ut
        neque fuga sint quos hic assumenda reprehenderit deleniti provident
        ducimus rem facilis voluptates modi omnis at. Perspiciatis quasi,
        cupiditate assumenda cum error ab a quae quam provident similique nemo
        sunt itaque?
      </p>
      <Button size='lg'>Check out</Button>
    </Container>
  );
};

export default Home;
