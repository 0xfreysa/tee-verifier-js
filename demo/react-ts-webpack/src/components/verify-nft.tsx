import React, { ReactElement, useEffect, useState } from 'react';
import { CheckCircle, RefreshCw, XCircle } from 'lucide-react';
import { CodeHashCallout } from './alert';
import * as Comlink from 'comlink';
import FAQ from './faq';
const { init, verify_code_attestation }: any = Comlink.wrap(
  new Worker(new URL('../utils/worker.ts', import.meta.url)),
);

const NONCE = '0000000000000000000000000000000000000000';

const EXPECTED_PCR =
  'Y8rvtShn+zXX4Q/t3qn5fYa5WVEijlN/Z+sstfbOLi1Cjpl6PmTfenaaP3ZF8g32';

export function VerifyNFT(): ReactElement {
  const [processingVerification, setProcessingVerification] = useState(false);

  const [resultVerify, setResultVerify] = useState<boolean | null>(null);

  const [codeAttestation, setCodeAttestation] = useState<null | string>(
    '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\n',
  );
  const [error, setError] = useState<null | string>(null);

  const verify_attestation_document = async () => {
    if (!codeAttestation) {
      setError('Please enter a valid code attestation');
      return;
    }
    const codeAttestation_ = codeAttestation.replace(/\\n/g, '').trim();

    //console.log('codeAttestation_', codeAttestation_);
    setProcessingVerification(true);

    try {
      const resultVerify = await verify_code_attestation(
        codeAttestation_,
        NONCE,
        EXPECTED_PCR,
        Math.floor(Date.now() / 1000),
      );
      setResultVerify(resultVerify);
    } catch (e) {
      console.log('error', e);
      setResultVerify(false);
      setError((e as Error).message);
    } finally {
      setProcessingVerification(false);
    }
  };
  useEffect(() => {
    const initialize = async () => {
      await init({ loggingLevel: 'Debug' });
    };

    initialize();
  }, []);

  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="flex justify-between items-center mb-4"></div>

        <div className="mt-2 h-30 overflow-y-auto border border-gray-200 rounded p-4 mb-4">
          <h1 className="text-2xl font-bold text-center my-4">
            Verify NFT Launch Fairness
          </h1>
          <h2 className="text-l font-bold">
            This verifies that Freysa launched the NFT collection herself from
            an AWS Nitro TEE
          </h2>

          <CodeHashCallout codeHash={EXPECTED_PCR} />

          <h2 className="text-l font-bold">Code attestation</h2>
          <textarea
            id="nonce"
            name="nonce"
            className="mt-1 block w-full h-32 overflow-y-auto rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            placeholder={
              codeAttestation ||
              'Paste the attestation object from the NFT launch'
            }
            onChange={(e) => setCodeAttestation(e.target.value)}
          />
        </div>

        <div className="p-8">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={verify_attestation_document}
              disabled={processingVerification}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto"
            >
              {processingVerification ? (
                <>
                  <RefreshCw className="animate-spin -ml-1 mr-2 h-5 w-5" />
                  Verifying...
                </>
              ) : (
                <>
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Verify Attestation
                </>
              )}
            </button>
          </div>

          {resultVerify !== null && (
            <div
              className={`mb-4 mt-4 p-4 rounded-md ${resultVerify ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
            >
              <div className="flex items-center ">
                {!resultVerify && <XCircle className="h-5 w-5 mr-2" />}

                {resultVerify ? (
                  <div>
                    ✅ Code hash matches open-source implementation <br />✅
                    Attestation verified against Amazon's root-of-trust <br />✅
                    Hardware instance authenticity confirmed
                  </div>
                ) : (
                  <span className="font-medium">
                    Remote attestation is invalid
                  </span>
                )}
                {!resultVerify && <p>{error}</p>}
              </div>
            </div>
          )}
          <FAQ />
        </div>
      </div>
    </div>
  );
}
