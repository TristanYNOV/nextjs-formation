import PinsList from "./_components/PinsList";

type PinsPageType = {};

export const metadata = {
  title: "Page Pins",
  description: "Description Pins",
};

export default function PinsPage({}: PinsPageType) {
  return (
    <main>
      <PinsList />
    </main>
  );
}
