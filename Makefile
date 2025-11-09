STACK_NAME = cloud-resume-challenge
REGION = us-east-1

.PHONY: build deploy

build:
	@echo "🔨 Building SAM application..."
	sam build

deploy: build
	@echo "🚀 Deploying SAM application..."
	sam deploy --profile my-test-profile

# Makefile for pushing changes to GitHub (CI/CD handles build + deploy)
# Usage:
#   make push                → commit & push with default message
#   make push COMMIT_MSG="..." → custom commit message

BRANCH = main
COMMIT_MSG ?= "Update project"

.PHONY: push status

push:
	@echo "📦 Committing and pushing changes to GitHub..."
	git add .
	git commit -m "$(COMMIT_MSG)" || echo "No changes to commit."
	git push origin $(BRANCH)
	@echo "✅ Changes pushed! GitHub Actions will now build & deploy automatically."

status:
	@echo "🔍 Git status:"
	git status
