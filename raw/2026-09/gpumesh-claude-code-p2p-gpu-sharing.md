# [원문 저장] I built GPUMesh with Claude Code - my AI agents can now run on my friend's idle GPU

- 출처: r/ClaudeAI, https://www.reddit.com/r/ClaudeAI/comments/1wf14vs/i_built_gpumesh_with_claude_code_my_ai_agents_can/
- 작성자: u/Miserable_Extent8845
- 게시일: 2026-09-14 (스캔 시점 당일 상위 게시물)
- GitHub: https://github.com/arjun988/GPU-Share

## 본문 (전문)

While building AI agents, I kept running into a simple problem: my GPU would be busy
training/running something, while my friend's NVIDIA GPU was sitting completely idle.

I wanted a simple way to use that spare compute without turning it into a full cloud
infrastructure project.

So I built GPUMesh, an open-source P2P GPU sharing tool.

The idea is that trusted machines can pair with each other and run Docker GPU workloads
remotely:
- `gpumesh share` → share a GPU
- `gpumesh pair` → establish a trusted connection
- `gpumesh run --peer <name> ...` → run a GPU job on that machine

The workload actually runs in a Docker container on the provider's machine, next to their
GPU. GPUMesh handles the peer connection, permissions, job execution, and logs.

I've been using it to:
- Run AI agent workloads on another machine
- Train models when my own GPU is occupied
- Use spare GPU capacity from friends
- Run CUDA/Docker workloads without manually setting up another server

### How Claude Code helped

I built a large part of the project using Claude Code. I used Claude Code to help design
and implement the CLI and Rust workspace, work through the P2P networking layer,
container/job execution flow, pairing and access-control logic, GPU detection, error
handling, and testing.

One thing I particularly liked was being able to give Claude Code the higher-level
requirement — essentially "I want two trusted machines to securely discover each other
and let one submit a Docker GPU job to the other" — and then iterate through the
networking, CLI, and execution details with it.

Claude Code was also useful for debugging the messy integration points between
networking, Docker, NVIDIA Container Toolkit, and the CLI.

The project is free and open source. I've tested the complete flow on an RTX 5060:
pairing → connecting → sharing → launching a remote Docker job → running `nvidia-smi`
inside the remote CUDA container.
