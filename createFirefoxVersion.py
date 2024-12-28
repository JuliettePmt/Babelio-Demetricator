import os
import shutil
import json

current_path = os.getcwd()  # Get file path
folder_name = "firefox-version/firefox"
folder_path = os.path.join(current_path, folder_name)
manifest_directory = os.path.join(current_path, "firefox-version")


def createFirefoxVersion():
    createFolder(current_path, folder_path, folder_name)
    copyFiles(current_path, folder_path, folder_name) # Copy new files in firefox directory
    replaceJSFiles(folder_name, "chrome.", "browser.") # Replace content
    copyManifest(manifest_directory, folder_path, current_path) # Copy manifest from the firefox-version directory and update version


def createFolder(current_path, folder_path, folder_name):
    if os.path.exists(folder_path):
        shutil.rmtree(folder_path)  # Delete previous
    os.makedirs(folder_path)


def copyFiles(current_path, folder_path, folder_name):

    exclude_items = ["manifest.json", "firefox", "firefox-version"]

    for item in os.listdir(current_path):
        item_path = os.path.join(current_path, item)
        destination_path = os.path.join(folder_path, item)

        if item in exclude_items:
            print(f"Excluded : {item}")
            continue

        if os.path.isfile(item_path):
            shutil.copy(item_path, destination_path)



def replaceJSFiles(directory, old_text, new_text):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".js"):
                file_path = os.path.join(root, file)
                
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                 
                updated_content = content.replace(old_text, new_text)
                
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(updated_content)

def copyManifest(manifest_directory, folder_path, current_path):
    source_file = os.path.join(manifest_directory, "manifest.json")
    destination_file = os.path.join(folder_path, "manifest.json")
    reference_file = os.path.join(current_path, "manifest.json")
    
    if not os.path.exists(source_file):
        print(f"Le fichier 'manifest.json' n'existe pas dans {manifest_directory}.")
        return
    if not os.path.exists(reference_file):
        print(f"Le fichier 'manifest.json' n'existe pas dans {current_path}.")
        return
    
    with open(reference_file, "r", encoding="utf-8") as f:
        reference_data = json.load(f)
        reference_version = reference_data.get("version")
        if not reference_version:
            print("Aucune clé 'version' trouvée dans le manifest.json de référence.")
            return

    with open(source_file, "r", encoding="utf-8") as f:
        manifest_data = json.load(f)
        manifest_data["version"] = reference_version

    os.makedirs(folder_path, exist_ok=True)

    with open(destination_file, "w", encoding="utf-8") as f:
        json.dump(manifest_data, f, indent=4)

    print(f"Manifest updated.")




createFirefoxVersion()
