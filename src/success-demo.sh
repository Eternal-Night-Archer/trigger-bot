curl \                                                                     
  -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer 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"\
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/Eternal-Night-Archer/BenchmarkData/actions/workflows/benchmark.yaml/dispatches \
  -d '{"ref":"master","inputs":{"url":"https://github.com/Eternal-Night-Archer/BenchmarkTrigger/pull/1","pr_id":"1"}}'