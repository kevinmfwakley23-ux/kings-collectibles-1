export interface MultiFactorProvider {
  readonly name: string;

  sendChallenge(
    collectorId: string,
  ): Promise<void>;

  verifyChallenge(
    collectorId: string,
    code: string,
  ): Promise<boolean>;
}
