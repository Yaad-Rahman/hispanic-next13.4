import type { SubscriptionType } from '@/types/subscriptionType';
import ApiFetch from '@/utils/ApiFetch';

async function postSubscription(authToken: string, body: any) {
  const response = await ApiFetch<SubscriptionType, 'single'>({
    url: 'subscriptions/create',
    method: 'POST',
    body,
    authToken,
  });

  return response;
}

async function getCurrentUserSubscription(authToken: string) {
  const response = await ApiFetch<SubscriptionType | null, 'single'>({
    url: 'subscriptions/latest-subscription',
    method: 'GET',
    authToken,
  });

  return response;
}

async function updateSubscription(authToken: string) {
  const response = await ApiFetch<SubscriptionType, 'single'>({
    url: 'subscriptions/update',
    method: 'PUT',
    authToken,
  });

  return response;
}

export { getCurrentUserSubscription, postSubscription, updateSubscription };
