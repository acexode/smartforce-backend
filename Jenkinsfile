@Library("ogtl-build@dev") _

Microservice(
        type: 'node',
        repo: 'smartforce',
        deployment: 'smartforce',
        image_repository: 'smartforce',
        namespace: 'ogtl',
        publiclyAccessible: true,
        devFlags: "--set autoscaling.enabled=false \
        --set volume.secondVolume.enabled=false \
        --set volume.mountPath=/app/.env \
        --set resources.requests.memory=500Mi \
        --set resources.requests.cpu=250m \
        --set resources.limits.cpu=500m \
        --set resources.limits.memory=800Mi \
        --set ingress.enabled=true \
        --set hostNamePrefix=smartforce-development \
        --set type=\"node\" \
        --set secretObjects.secretName=smartforce-dev \
        --set probes.readinessProbe.enabled=false \
        --set probes.path=/ \
        --set probes.livenessProbe.enabled=false \
        --set PersistentVolumeClaim.enabled=false \
        --set serviceAccount.name=secret-store",
        commonFlags: "--set image.port=5000 \
        --set cron.enabled=false \
        --set service.type=NodePort",
        prodFlags: "--set autoscaling.minReplicas=1 \
        --set autoscaling.maxReplicas=3 \
        --set autoscaling.targetCPUUtilizationPercentage=70 \
        --set autoscaling.targetMemoryUtilizationPercentage=90 \
        --set volume.mountPath=/app/.env \
        --set volume.enabled=true \
        --set resources.requests.memory=500Mi \
        --set resources.requests.cpu=250m \
        --set resources.limits.cpu=500m \
        --set resources.limits.memory=800Mi \
        --set ingress.enabled=true \
        --set alb.certarn=arn:aws:acm:eu-west-2:651611223190:certificate/93532aae-9193-48fd-9316-6471fb79fc7b \
        --set hostNamePrefix=smartforce-backend \
        --set secretObjects.enabled=true \
        --set probes.readinessProbe.enabled=false \
        --set probes.livenessProbe.enabled=false \
        --set type=\"node\" \
        --set secretObjects.secretName=smartforce-prod \
        --set env[1].name=AWS_REGION \
        --set env[1].value=eu-west-1 \
        --set istio.enabled=false \
        --set PersistentVolumeClaim.enabled=false \
        --set alb.development=prod \
        --set ingress.host=outsourceglobal.com \
        --set serviceAccount.name=secret-store"
)
