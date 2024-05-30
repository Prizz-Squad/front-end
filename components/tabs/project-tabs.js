import { useRouter } from "next/router";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export const ProjectTabs = () => {
  const router = useRouter();

  const tabs = [
    {
      id: "summary",
      label: "Summary",
      onClick: () => router.push("/projects/1/summary"),
    },
    {
      id: "board",
      label: "Board",
      onClick: () => router.push("/projects/1/board"),
    },
    {
      id: "list",
      label: "List",
      onClick: () => router.push("/projects/1/list"),
    },
    {
      id: "settings",
      label: "Settings",
      onClick: () => router.push("/projects/1/settings"),
    },
  ];

  return (
    <Tabs defaultValue="account" className="w-[800px]">
      <TabsList className="grid w-full grid-cols-4">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id} onClick={tab.onClick}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
