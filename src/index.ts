import { Probot } from "probot";

export = (app: Probot) => {
  app.on(["issue_comment.edited"], async (context) => {
    app.log.info("issue_comment edited");
    if (context.payload.comment.body.includes("@skyleaworlder-test-bot /")) {
      app.log.info(`inputs: repository: ${context.payload.repository.full_name}`)
      await context.octokit.actions.createWorkflowDispatch({
        owner: "Eternal-Night-Archer",
        repo: "BenchmarkData",
        workflow_id: "benchmark.yaml",
        ref: "master",
        inputs: {
          "url": context.payload.issue.html_url,
          "pr_id": context.payload.issue.number.toString(),
          "repository": `${context.payload.repository.full_name}`
        }
      });
    } else {
      const issueComment = context.issue({
        body: "Thanks for opening this issue",
      });
      await context.octokit.issues.createComment(issueComment);
    }
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
