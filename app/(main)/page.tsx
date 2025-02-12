"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">Testing Area</h2>
        </CardHeader>
        <CardContent>
          <h2>Results:</h2>
          <pre>testing code here...</pre>
        </CardContent>
      </Card>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  );
};

export default Dashboard;
