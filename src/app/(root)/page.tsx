"use client";
import Container from "@/components/container";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import { Card, CardBody, CardHeader, Chip, Tab, Tabs } from "@nextui-org/react";
import { CircleDollarSign, Users } from "lucide-react";

export default function Home() {
  return (
    <Container>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <Tabs aria-label="Options">
        <Tab key="overview" title="Overview">
          <div className="grid grid-cols-12 gap-4">
            <Card className="col-span-12 sm:col-span-6 lg:col-span-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="text-sm font-medium">Total Revenue</div>
                <Chip color="primary" radius="full" className="h-12 w-12">
                  <CircleDollarSign strokeWidth={2} />
                </Chip>
              </CardHeader>
              <CardBody>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardBody>
            </Card>
            <Card className="col-span-12 sm:col-span-6 lg:col-span-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="text-sm font-medium">Subscriptions</div>
                <Chip color="success" radius="full" className="h-12 w-12">
                  <Users strokeWidth={2} color="white" />
                </Chip>
              </CardHeader>
              <CardBody>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardBody>
            </Card>
            <Card className="col-span-12 sm:col-span-6 lg:col-span-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="text-sm font-medium">Sales</div>
                <Chip color="secondary" radius="full" className="h-12 w-12">
                  <CircleDollarSign strokeWidth={2} />
                </Chip>
              </CardHeader>
              <CardBody>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardBody>
            </Card>
            <Card className="col-span-12 sm:col-span-6 lg:col-span-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="text-sm font-medium">Active Now</div>
                <Chip color="warning" radius="full" className="h-12 w-12">
                  <CircleDollarSign strokeWidth={2} color="white" />
                </Chip>
              </CardHeader>
              <CardBody>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardBody>
            </Card>
            <Card className="col-span-12 2xl:col-span-8">
              <CardHeader>
                <div>Overview</div>
              </CardHeader>
              <CardBody className="pl-2">
                <Overview />
              </CardBody>
            </Card>
            <Card className="col-span-12 2xl:col-span-4">
              <CardHeader>
                <div>Recent Sales</div>
              </CardHeader>
              <CardBody>
                <RecentSales />
              </CardBody>
            </Card>
          </div>
        </Tab>
        <Tab isDisabled key="analytics" title="Analytics">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </CardBody>
          </Card>
        </Tab>
        <Tab isDisabled key="reports" title="Reports">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
        <Tab isDisabled key="notifications" title="Notifications">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </Container>
  );
}
