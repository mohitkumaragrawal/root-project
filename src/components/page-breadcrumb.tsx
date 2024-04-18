import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Props {
  breadcrumb: { name: string; link: string }[];
}

export function PageBreadcrumbs({ breadcrumb }: Props) {
  return (
    <Breadcrumb className="mt-3">
      <BreadcrumbList>
        {breadcrumb.map((item, index) => {
          const last = index === breadcrumb.length - 1;

          return (
            <>
              <BreadcrumbItem key={index}>
                <Link
                  to={item.link}
                  className={cn("capitalize", last ? "text-primary" : "")}
                >
                  {item.name}
                </Link>
              </BreadcrumbItem>
              {!last && <BreadcrumbSeparator />}
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
