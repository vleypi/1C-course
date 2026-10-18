export interface IModuleRouteParams {
  module: string;
}

export interface ITopicRouteParams extends IModuleRouteParams {
  topic: string;
}

export interface ILessonRouteParams extends ITopicRouteParams {
  lesson: string;
}

export interface IRouteParamsProps<TParams> {
  params: Promise<TParams>;
}
