import type { ReactNode } from "react";
import { ListRowLink, ListRowLocked } from "@/shared/ui";
import type { ITopicLocation } from "@/entities/course/interfaces/location.interface";
import { isTopicAvailable } from "@/entities/course/utils/availability.util";
import { getTopicHref } from "@/entities/course/utils/href.util";

interface ITopicRowProps {
  location: ITopicLocation;
  aside?: ReactNode;
}

export const TopicRow = ({ location, aside }: ITopicRowProps) =>
  isTopicAvailable(location.topic) ? (
    <ListRowLink
      index={location.topicNumber}
      title={location.topic.title}
      href={getTopicHref(location)}
      replace
      aside={aside}
    />
  ) : (
    <ListRowLocked index={location.topicNumber} title={location.topic.title} />
  );
