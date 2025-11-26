import { Auth } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model } from "./model";
import { Writing, Project } from "server/models";

export default function update(
  message: Msg,
  model: Model,
  user: Auth.User
): Model | [Model, ...Promise<Msg>[]] {
  const [command, payload, callbacks] = message;

  switch (command) {
    case "noop":
      return model;

    case "writing/save": {
      const { slug, writing } = payload;
      const { onSuccess, onFailure } = callbacks || {};

      return [
        model,
        saveWriting(payload, user)
          .then((savedWriting): Msg => {
            if (onSuccess) onSuccess();
            return ["writing/load", { slug, writing: savedWriting }];
          })
          .catch((error: Error): Msg => {
            if (onFailure) onFailure(error);
            return ["noop"];
          }),
      ];
    }

    case "writing/request": {
      const { slug } = payload;
      if (model.writing?.slug === slug) return model;

      return [
        { ...model, writing: { slug } as Writing },
        requestWriting(payload, user).then(
          (writing): Msg => ["writing/load", { slug, writing }]
        ),
      ];
    }

    case "writing/load": {
      const { writing } = payload;
      return { ...model, writing };
    }

    case "writing-list/request": {
      if (model.writingList) return model;

      return [
        model,
        requestWritingList(user).then(
          (writings): Msg => ["writing-list/load", { writings }]
        ),
      ];
    }

    case "writing-list/load": {
      const { writings } = payload;
      return { ...model, writingList: writings };
    }

    case "project/request": {
      const { slug } = payload;
      if (model.project?.slug === slug) return model;

      return [
        { ...model, project: { slug } as Project },
        requestProject(payload, user).then(
          (project): Msg => ["project/load", { slug, project }]
        ),
      ];
    }

    case "project/save": {
      const { slug, project } = payload;
      const { onSuccess, onFailure } = callbacks || {};

      return [
        model,
        saveProject(payload, user)
          .then((savedProject): Msg => {
            if (onSuccess) onSuccess();
            return ["project/load", { slug, project: savedProject }];
          })
          .catch((error: Error): Msg => {
            if (onFailure) onFailure(error);
            return ["noop"];
          }),
      ];
    }

    case "project/load": {
      const { project } = payload;
      return { ...model, project };
    }

    case "projects-list/request": {
      if (model.projectsList) return model;

      return [
        model,
        requestProjectsList(user).then(
          (projects): Msg => ["projects-list/load", { projects }]
        ),
      ];
    }

    case "projects-list/load": {
      const { projects } = payload;
      return { ...model, projectsList: projects };
    }

    default: {
      const unhandled: never = command;
      throw new Error(`Unhandled message "${unhandled}"`);
    }
  }
}

function requestWriting(payload: { slug: string }, user: Auth.User) {
  return fetch(`/api/writing/${payload.slug}`, {
    headers: Auth.headers(user),
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw new Error(`Failed to load writing: ${payload.slug}`);
    })
    .then((json: unknown) => {
      if (json) return json as Writing;
      throw new Error("No JSON in response");
    });
}

function requestWritingList(user: Auth.User) {
  return fetch("/api/writing", {
    headers: Auth.headers(user),
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw new Error("Failed to load writing list");
    })
    .then((json: unknown) => {
      if (json) return json as Writing[];
      throw new Error("No JSON in response");
    });
}

function requestProject(payload: { slug: string }, user: Auth.User) {
  return fetch(`/api/projects/${payload.slug}`, {
    headers: Auth.headers(user),
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw new Error(`Failed to load project: ${payload.slug}`);
    })
    .then((json: unknown) => {
      if (json) return json as Project;
      throw new Error("No JSON in response");
    });
}

function requestProjectsList(user: Auth.User) {
  return fetch("/api/projects", {
    headers: Auth.headers(user),
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw new Error("Failed to load projects list");
    })
    .then((json: unknown) => {
      if (json) return json as Project[];
      throw new Error("No JSON in response");
    });
}

function saveWriting(
  payload: { slug: string; writing: Writing },
  user: Auth.User
) {
  return fetch(`/api/writing/${payload.slug}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...Auth.headers(user),
    },
    body: JSON.stringify(payload.writing),
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw new Error(`Failed to save writing: ${payload.slug}`);
    })
    .then((json: unknown) => {
      if (json) return json as Writing;
      throw new Error("No JSON in response");
    });
}

function saveProject(
  payload: { slug: string; project: Project },
  user: Auth.User
) {
  return fetch(`/api/projects/${payload.slug}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...Auth.headers(user),
    },
    body: JSON.stringify(payload.project),
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw new Error(`Failed to save project: ${payload.slug}`);
    })
    .then((json: unknown) => {
      if (json) return json as Project;
      throw new Error("No JSON in response");
    });
}
