import React from 'react';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function FAQ() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="" target="_blank">
          <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center">
            <Github className="mr-2 h-4 w-4" />
            Verify Codebase
          </button>
        </Link>

        <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center">
          <Github className="mr-2 h-4 w-4" />
          Verifier code
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-2">
        What is the code attestation ?
      </h2>
      <div className="flex flex-col sm:flex-row  ">
        {' '}
        This attestation cryptographically proves that Freysa launched the NFT
        collection from an AWS Nitro Trusted Execution Environment (TEE).
      </div>

      <h2 className="text-2xl font-bold mb-2">What is the code hash ?</h2>
      <div className="flex flex-col sm:flex-row  ">
        {' '}
        It is a representation of the environment of the AWS Nitro TEE and the
        code running within it. This code hash is part of the attestation signed
        by AWS
      </div>

      <h2 className="text-2xl font-bold mb-2">How to reproduce code hash ?</h2>
      <div className="  ">
        {' '}
        The process involves several steps: <br />
        Clone the{' '}
        <Link to="" className="text-blue-500">
          agent codebase
        </Link>{' '}
        <br />
        Generate the enclave image using aws nitro cli <br />
        Run the enclave image <br />
        Verify that the PCRs contain the expected code hash
        <br />
      </div>

      <h2 className="text-2xl font-bold mb-2">
        What is the verification process ?
      </h2>
      <div className="  ">
        {' '}
        This involves several steps including verifying the aws certificate,
        code hash and expiration. Check the{' '}
        <Link to="" className="text-blue-500">
          verifier codebase
        </Link>{' '}
        for more details.
      </div>
    </div>
  );
}
