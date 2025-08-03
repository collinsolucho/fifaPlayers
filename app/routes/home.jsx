import { PlayersList } from "../components/PlayersList";

export function meta() {
  return [
    { title: "FIFA Players - React Router App" },
    { name: "description", content: "View FIFA players information!" },
  ];
}

export default function Home() {
  return <PlayersList />;
}
