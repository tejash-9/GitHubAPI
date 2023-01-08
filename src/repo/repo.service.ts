import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Buffer } from 'buffer';

@Injectable()
export class RepoService {
  async createRepo(accessToken: string, username:string, repoName: string) {
    const config = {
      headers: {
         Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    };
    const data = {
      name: repoName,
      private: false,
      has_issues: true,
      has_projects: true,
      has_wiki: true,
    };
    try {
      const response = await axios.post(
        'https://api.github.com/user/repos',
        data,
        config,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async createFile(accessToken: string, username: string, repoName: string) {
    const config = {
      headers: {
         Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }
    }
    const fileData = {
      message: 'Initial commit',
      content: Buffer.from('You have successfully created this repository using API integration.').toString('base64'),
      branch: 'main',
    };
    await axios.put(
      `https://api.github.com/repos/${username}/${repoName}/contents/README.md`,
      fileData,
      config,
    );
  }
}