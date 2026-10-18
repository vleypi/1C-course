import { notFound } from "next/navigation";
import { courseRepository, isTopicAvailable, type ITopicLocation } from "@/entities/course";
import type { ITopicRouteParams } from "@/shared/config";

export const resolveTopic = ({ module, topic }: ITopicRouteParams): ITopicLocation => {
  const location = courseRepository.findTopic(module, topic);
  if (!location || !isTopicAvailable(location.topic)) notFound();

  return location;
};
