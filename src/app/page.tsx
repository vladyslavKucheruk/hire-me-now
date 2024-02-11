import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { RoutesEnum } from "./Routes";
import { Button } from "@/shared/ui/button";
import { buttonVariants } from "@/shared/ui/button";
import { Star, Tag, Trophy } from "lucide-react";

const perks = [
  {
    title: "High Quality",
    icon: Trophy,
    description: "We have a strict process to ensure the quality of our employees is top-notch.",
  },
  {
    title: "Talented Employees",
    icon: Star,
    description: "Our employees are highly talented and ready to work for you today.",
  },
  {
    title: "Affordable Pricing",
    icon: Tag,
    description: "We offer competitive pricing for our employees to ensure you get the best value.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w3xl">
          <h1 className="text-4xl max-w-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high quality <span className="text-purple-600">employees</span>
          </h1>
          <p className="mt-5 text-lg max-w-prose text-muted-foreground">
            Find the best employees for your company. We have a large pool of talented people ready
            to work for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={RoutesEnum.EMPLOYEES} className={buttonVariants({ variant: "default" })}>
              Browse Employees
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="text-center md:flex md:items-start md:text-left lg:block"
              >
                <div className="flex items-center flex-col justify-center gap-4">
                  <div>
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-900">
                      {<perk.icon className="w-1/3 h-1/3" />}
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-base font-medium text-gray-900">{perk.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{perk.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
